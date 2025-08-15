import { RouterModule, Routes } from "@angular/router";
import { ViewComponentComponent } from "./Components/view-component/view-component.component";

const routes: Routes = [{
    path: '',
    component: ViewComponentComponent
}];

export const StrategyRoutingModule = RouterModule.forChild(routes);