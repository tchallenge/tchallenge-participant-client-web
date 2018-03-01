import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {EventService} from '../event.service';
import {ForumEvent} from '../event.model';
import {Specialization} from '../specialization.model';
import {WorkbookService} from '../../workbook/workbook.service';
import {WorkbookInvoice} from '../../workbook/workbook-invoice.model';
import {Maturity} from '../maturity.model';
import {SecurityService} from '../../shared/security.service';

@Component({
    selector: 'app-event-view',
    templateUrl: './event-view.component.html',
    styleUrls: ['./event-view.component.css']
})
export class EventViewComponent implements OnInit {

    @Input() event: ForumEvent;

    availableMaturities: Maturity[];
    availableSpecializations: Specialization[];
    selectedMaturity: Maturity;
    selectedSpecialization: Specialization;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private securityService: SecurityService,
                private eventService: EventService,
                private workbookService: WorkbookService) {

    }

    ngOnInit(): void {
        if (!this.securityService.isAuthenticated()) {
            this.router.navigate(['/signup']);
            return;
        }
        this.availableMaturities = [
            {
                id: 'INTERMEDIATE',
                caption: 'Разработчик'
            }
        ];
        /*
        this.availableMaturities = [
            {
                id: 'JUNIOR',
                caption: 'Начало карьеры'
            },
            {
                id: 'INTERMEDIATE',
                caption: 'Разработчик'
            },
            {
                id: 'SENIOR',
                caption: 'Старший разработчик'
            },
            {
                id: 'EXPERT',
                caption: 'Эксперт'
            }
        ];
        */
        this.availableSpecializations = [];
        this.eventService.retrieveSpecializations().subscribe(specializations => {

            this.route.params.subscribe((params) => {
                const permalink = params['permalink'];

                this.eventService.searchByPermalink(permalink).subscribe(shortEvents => {

                    const id = shortEvents.items[0].id;
                    this.eventService.retrieveById(id).subscribe(event => {
                        this.event = event;
                        this.event.specializationIds.forEach(s => {
                            const spec: Specialization = specializations.filter(sp => sp.id === s)[0];
                            this.availableSpecializations.push(spec);
                        });
                        this.selectedMaturity = this.availableMaturities[0];
                        this.selectedSpecialization = this.availableSpecializations[0];
                    });
                });
            });
        });
    }

    onApplyClicked($event: Event): void {
        $event.preventDefault();
        const workbook: WorkbookInvoice = {
            eventId: this.event.id,
            maturity: this.selectedMaturity.id,
            specializationId: this.selectedSpecialization.id
        };
        this.workbookService.create(workbook).subscribe(idAware => {
            this.router.navigate(['workbooks/' + idAware.id]);
        });
    }
}
