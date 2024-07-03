import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { CoursesRoutingModule } from './courses-routing.module'
import { CoursesComponent } from './courses/courses.component'
import { AppMaterialImportsModule } from '../shared/app-material-imports/app-material-imports.module'
import { SharedModule } from '../shared/shared.module'

@NgModule({
    declarations: [CoursesComponent],
    imports: [
        CommonModule,
        CoursesRoutingModule,
        AppMaterialImportsModule,
        SharedModule
    ],
})
export class CoursesModule {}
