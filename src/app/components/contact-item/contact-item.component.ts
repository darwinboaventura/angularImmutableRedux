import { Component, Input , ChangeDetectionStrategy} from '@angular/core';
import { ContactStore, Contact as ContactModel } from '../../stores/contact-store/contact-store';
import { removeContact, starContact } from '../../actions/contact-action/contact-action';

@Component({
	selector: 'contact-item',
	templateUrl: './contact-item.component.html',
	styleUrls: ['./contact-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class ContactItemComponent {
	@Input()
	contact: ContactModel;

	constructor(private store: ContactStore) {}

	removeContact(contact) {
		this.store.dispatch(removeContact(contact.id));
	}

	starContact(contact) {
		this.store.dispatch(starContact(contact.id));
	}
}