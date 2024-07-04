import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { CoursesRoutingModule } from './courses-routing.module'
import { CoursesComponent } from './courses/courses.component'
import { AppMaterialImportsModule } from '../shared/app-material-imports/app-material-imports.module'
import { SharedModule } from '../shared/shared.module';
import { CourseFormComponent } from './course-form/course-form.component'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
    declarations: [CoursesComponent, CourseFormComponent],
    imports: [
        CommonModule,
        CoursesRoutingModule,
        AppMaterialImportsModule,
        SharedModule,
        ReactiveFormsModule
    ],
})
export class CoursesModule {}
