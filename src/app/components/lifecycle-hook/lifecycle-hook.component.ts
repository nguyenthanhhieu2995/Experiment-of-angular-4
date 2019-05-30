import {
    Component,
    Input,
    ContentChild,
    ElementRef,
    OnChanges,
    OnInit,
    DoCheck,
        AfterContentInit,
        AfterContentChecked,
        AfterViewInit,
        AfterViewChecked,
    OnDestroy,
    SimpleChanges
} from '@angular/core';

@Component({
    selector: 'app-lifecycle-hook',
    templateUrl: './lifecycle-hook.component.html',
    styleUrls: ['./lifecycle-hook.component.css']
})
export class LifecycleHookComponent
    implements OnInit, OnChanges, DoCheck, OnDestroy, AfterContentInit, AfterViewChecked, AfterContentChecked {
    title = 'Life-cyclehook component';
    previousValue: number;
    @Input() total: number;
    @ContentChild('a') a: ElementRef;
    constructor() {
        console.log('LifecycleHookComponent : contructor ');
    }
    ngOnChanges(changes: SimpleChanges): void {
        console.log('LifecycleHookComponent : OnChanges ran', changes);
        this.previousValue = changes.total.previousValue;
    }
    ngOnInit(): void {
        console.log('LifecycleHookComponent : OnInit ran.');
    }
    ngDoCheck(): void {
        console.log('LifecycleHookComponent : DoCheck ran.');
    }
    ngAfterContentInit(): void {
        console.log(this.a);
        console.log('LifecycleHookComponent : AfterContentInit ran.');
    }
    ngAfterContentChecked(): void {
        console.log('LifecycleHookComponent : AfterContentChecked ran.');
    }
    ngAfterViewInit(): void {
        console.log('LifecycleHookComponent : AfterViewInit ran');
    }
    ngAfterViewChecked(): void {
        console.log('LifecycleHookComponent : AfterViewChecked ran');
    }
    ngOnDestroy(): void {
        console.log('LifecycleHookComponent : OnDestroy ran');
    }

}
