import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { CoursesRoutingModule } from './courses-routing.module'
import { CoursesComponent } from './courses/courses.component'
import { AppMaterialImportsModule } from '../shared/app-material-imports/app-material-imports.module'
import { SharedModule } from '../shared/shared.module'
import { CourseFormComponent } from './course-form/course-form.component'
import { ReactiveFormsModule } from '@angular/forms'
import { InputPropertyComponent } from '../input-property/input-property.component'
import { DataBindingComponent } from '../data-binding/data-binding.component'
import { OutputPropertyComponent } from '../output-property/output-property.component'
import { CicloVidaComponent } from '../ciclo-vida/ciclo-vida.component'
import { DiretivasModule } from '../diretivas/diretivas.module'

@NgModule({
    declarations: [
        CoursesComponent,
        CourseFormComponent,
        InputPropertyComponent,
        DataBindingComponent,
        OutputPropertyComponent,
        CicloVidaComponent,
    ],
    imports: [
        CommonModule,
        CoursesRoutingModule,
        AppMaterialImportsModule,
        SharedModule,
        ReactiveFormsModule,
        DiretivasModule
    ],
})
export class CoursesModule {}
