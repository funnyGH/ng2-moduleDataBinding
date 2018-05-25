import { AttributeDirectiveComponent } from './components/attribute-directive/attribute-directive.component';
import { ComponentInteracteComponent } from './components/component-interacte/component-interacte.component';
import { ComponentStyleComponent } from './components/component-style/component-style.component';
import { ConstructDirectiveComponent } from './components/construct-directive/construct-directive.component';
import { DynamicComponentComponent } from './components/dynamic-component/dynamic-component.component';
import { LifePeriodComponent } from './components/life-period/life-period.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { ShowDataComponent } from './components/show-data/show-data.component';
import { TemplateGrammerComponent } from './components/template-grammer/template-grammer.component';
import { EgDemoComponent } from './components/eg-demo/eg-demo.component';

export const AppRoutes = [
  {
    path: '',  // router is depty when enter
    redirectTo: 'showData',
    pathMatch: 'full'   // 关于路由参数，可点击 https://www.cnblogs.com/fanzhengshao/p/6433350.html
  },
  {
    path: 'attrDirec', // 属性型指令
    component: AttributeDirectiveComponent
  },
  {
    path: 'compInterac',   // 组件交互
    component: ComponentInteracteComponent
  },
  {
    path: 'compStyle',       // 组件样式
    component: ComponentStyleComponent
  },
  {
    path: 'construcDirec',      // 结构型指令
    component: ConstructDirectiveComponent
  },
  {
    path: 'dynamicComp',        // 动态组件
    component: DynamicComponentComponent
  },
  {
    path: 'lifePeriod',     // 生命周期钩子
    component: LifePeriodComponent
  },
  {
    path: 'pipe',       // 管道
    component: PipeComponent
  },
  {
    path: 'showData',       // 展示数据
    component: ShowDataComponent
  },
  {
    path: 'tempGrammer',        // 模版语法
    component: TemplateGrammerComponent
  },
  {
    path: 'egDemo',        // 模版语法
    component: EgDemoComponent
  },
  {
    path: '**',   // fallback router must in the last
    component: ShowDataComponent
  }
];
