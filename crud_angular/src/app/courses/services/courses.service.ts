import { Injectable } from '@angular/core'
import { Course } from '../model/course'
import { HttpClient } from '@angular/common/http'
import { delay, first, tap } from 'rxjs'

@Injectable({
    providedIn: 'root',
})
export class CoursesService {
    constructor(private httpClient: HttpClient) {}

    private readonly API = 'api/courses'

    list() {
        return this.httpClient
            .get<Course[]>(this.API)
            .pipe(
              first(), //executes only the first request and closes the conection
              //delay(2000),
              tap((courses) => console.log(courses)))
    }
}
