import {readdirSync, writeFileSync} from "node:fs";
import * as path from "node:path";
import {resolve} from "node:path";
import chokidar from "chokidar";
import {mkdirp} from "fs-extra";

const pathToSrc = resolve(__dirname, '../src')
const pathToTestsComponentsFolder = resolve(pathToSrc, 'test-components')
const pathToTestsOutput = resolve(__dirname, '../tests')
const serverHost = 'http://localhost:5173';

await mkdirp(pathToTestsOutput);

generate();

console.log("Watching tests...");

const watcher = chokidar.watch(pathToTestsComponentsFolder, {
  ignored: (path, stats) => stats?.isFile() && !path.endsWith('.tsx'), // only watch js files
  persistent: true
});

watcher.on('change', () => {
  generate();
});

function generate() {
  console.log("Generating tests...");

  const testComponents = readdirSync(pathToTestsComponentsFolder)
   .filter(file => file.endsWith('.tsx'))
   .map(file => {
     const routeName = file.replace('.tsx', '').replace(/[-_]/g, '');
     const componentName = routeName.charAt(0).toUpperCase() + routeName.slice(1);
     const fileName = file.replace('.tsx', '.js');

     const imp = `import ${componentName} from '@test-components/${fileName}';`;
     const routePathQuoted = `"/${routeName}"`

     return {
       routeName,
       imp,
       route: `  {
         path: ${routePathQuoted},
         Component: () => <${componentName}/>,
        }`
     }
   })

  const allRoutesString = ` // Generated file. Do not edit.
import {RouteObject} from "react-router-dom";
import {TestComponentAndList} from "~/components/TestComponentAndList";

${testComponents.map(({imp}) => imp).join('\n')}

const testRoutes: RouteObject[] = [    ${testComponents.map(({route}) => route).join(',\n')}]

export const allRoutesPaths = [${testComponents.map(({routeName}) => `"${routeName}"`).join(',\n')}];

export const allRoutes: RouteObject[] = [
    {
        path: "/",
        Component: () => <div>
            <TestComponentAndList/>
        </div>,
        children: testRoutes
        
     },
]`;

  const testsAsString = testComponents.map(({routeName}) => `
  test('${routeName} should render Hello world', async ({ page }) => {
    await page.goto('${serverHost}/${routeName}');
    const z = await page.getByTestId('tested').textContent();
    expect(z).toContain('Hello world');
  });
  `).join('\n');

  const testSuiteString = `// Generated file. Do not edit. 
  import { expect, test } from '@playwright/test';
  
  ${testsAsString}`

  console.log("Writing routes...");
  writeFileSync(path.resolve(pathToSrc, 'allRoutes.gen.tsx'), allRoutesString)

  console.log("Writing tests...");
  writeFileSync(path.resolve(pathToTestsOutput, 'generated.test.ts'), testSuiteString)
}


