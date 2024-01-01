import { TestBed } from '@angular/core/testing';
<<<<<<< HEAD
import { RouterTestingModule } from '@angular/router/testing';
=======
>>>>>>> f13e8a6d3591ab9caeba7b93449787b8f9ff4945
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
<<<<<<< HEAD
    imports: [RouterTestingModule],
=======
>>>>>>> f13e8a6d3591ab9caeba7b93449787b8f9ff4945
    declarations: [AppComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

<<<<<<< HEAD
  it(`should have as title 'proyectoBootcamp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('proyectoBootcamp');
=======
  it(`should have as title 'Curso'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Curso');
>>>>>>> f13e8a6d3591ab9caeba7b93449787b8f9ff4945
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
<<<<<<< HEAD
    expect(compiled.querySelector('.content span')?.textContent).toContain('proyectoBootcamp app is running!');
=======
    expect(compiled.querySelector('.content span')?.textContent).toContain('Curso app is running!');
>>>>>>> f13e8a6d3591ab9caeba7b93449787b8f9ff4945
  });
});
