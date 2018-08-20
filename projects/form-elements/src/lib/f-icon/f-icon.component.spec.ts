import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { FIconComponent } from './f-icon.component'

describe('FIconComponent', () => {
    let component: FIconComponent
    let fixture: ComponentFixture<FIconComponent>

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FIconComponent],
        }).compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(FIconComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
