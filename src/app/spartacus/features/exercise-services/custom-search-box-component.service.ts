import { Injectable } from '@angular/core';
import { EventService, RoutingService, SearchboxService, TranslationService, WindowRef } from '@spartacus/core';
import { SearchBoxComponentService, SearchBoxConfig } from '@spartacus/storefront';

@Injectable({
  providedIn: 'root'
})
export class CustomSearchBoxComponentService extends SearchBoxComponentService {

  constructor(
    override searchService: SearchboxService,
    protected override routingService: RoutingService,
    protected override translationService: TranslationService,
    protected override winRef: WindowRef,
    protected override eventService: EventService,
  ) {
    super(searchService, routingService, translationService, winRef, eventService);
  }

  override search(query: string, config: SearchBoxConfig): void {
    if (!query || query === '') {
      this.clearResults();
      return;
    }
    
    if (config.minCharactersBeforeRequest && query.length < config.minCharactersBeforeRequest) {
      return;
    }
    
    if (config.displayProducts) {
      this.searchService.search(query, {
        pageSize: config.maxProducts,
        sort: 'topRated',
      });
    }
    
    if (config.displaySuggestions) {
      this.searchService.searchSuggestions(query, {
        pageSize: config.maxSuggestions,
      });
    }
  }
}
