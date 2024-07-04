import { CoursesService } from './../services/courses.service'
import { Component } from '@angular/core'
import { Course } from '../model/course'
import { Observable, catchError, of } from 'rxjs'
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.scss'],
})

export class CoursesComponent {
    courses$: Observable<Course[]>;
    displayedColumns = ['_id', 'name', 'category', 'actions']

    constructor(
      private coursesService: CoursesService,
      public dialog: MatDialog,
      private router: Router,
      private route: ActivatedRoute
    )
      {
        // this.coursesService = new CoursesService();
        this.courses$ = this.coursesService.list().pipe(
          catchError(error => {
            this.onError('Erro ao carregar cursos.');
            return of([]) //retorna um observable com array vazio
          })
        )
    }

    onError(errorMessage: string) {
      this.dialog.open(ErrorDialogComponent, {
        data: errorMessage
      });
    }

    onAdd() {
      this.router.navigate(['new'], {relativeTo: this.route});
    }
}
