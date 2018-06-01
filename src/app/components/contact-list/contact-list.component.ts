import { Component } from '@angular/core';
import { addContact } from '../../actions/contact-action/contact-action';
import { ContactStore } from '../../stores/contact-store/contact-store';

@Component({
	selector: 'contact-list',
	templateUrl: './contact-list.component.html',
	styleUrls: ['./contact-list.component.scss'],
})

export class ContactListComponent {
	contactID: number;
	
	constructor(private store: ContactStore) {
		this.contactID = 0;
	}

	addContact(contact) {
		this.store.dispatch(addContact(contact, this.contactID++));
	}
}

