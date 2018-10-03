import { Directive, Input, ViewContainerRef,TemplateRef} from "@angular/core";

@Directive ({
    selector:'[appCustom]'
})

export class CustomDirective{
@Input() set appCustom(condition:boolean)
{
if(!condition)
{
    this.vcRef.createEmbeddedView(this.templateRef)
}
else {
    this.vcRef.clear()
}
}
constructor (private templateRef:TemplateRef<any>, private vcRef:ViewContainerRef)
//access template and now a container(space) in the template from above constructor and create a view in template with/in the if condition 
//TemplateRef to access template
//ViewContainerRef to tell where to render element i.e add or remove elements
//createEmbedded View create place for rendering element
{}

}