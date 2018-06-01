import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactItemComponent } from './components/contact-item/contact-item.component';
import { ContactStore } from './stores/contact-store/contact-store';

@NgModule({
	declarations: [
		AppComponent,
		ContactListComponent, 
		ContactItemComponent
	],
	imports: [
		BrowserModule
	],
	exports: [
		ContactListComponent, 
		ContactItemComponent
	],
	providers: [
		ContactStore
	],
	bootstrap: [AppComponent]
})

export class AppModule {}