import { Injectable } from "@angular/core";
import { Converter, Occ, Product } from "@spartacus/core";

@Injectable({
  providedIn: 'root',
})
export class BestbuyProductNormalizer implements Converter<Occ.Product, Product> {

  convert(source: any, target?: any): Product {
    if (target === undefined) {
      target = { ...(source as any) } as Product;
    }

    target.name = source.name;
    target.averageRating = source.customerReviewAverage;
    target.numberOfReviews = source.customerReviewCount;
    target.description = source.longDescriptionHtml;
    target.summary = source.shortDescription;
    target.price = {
      formattedValue: source.salePrice + '$',
      value: source.salePrice,
    };
    target.stock = source.onlineAvailability ? { stockLevel: 100, stockLevelStatus: 'good' } : {};
    target.categories = this.convertCategories(source);
    target.images = this.convertImages(source);
    target.classifications = this.convertFeatures(source);
    
    // Set purchasable field to true, otherwise needs variantOptions
    // to aggregate the variants price and stock etc.
    target.purchasable = true;
    return target;
  }

  private convertCategories(source: any) {
    return source.categoryPath?.map((category: any) => {
    return { name: category.name, code: category.id };
    });
  }

  private convertImages(source: any) {
    return {
      PRIMARY: {
        zoom: {
          url: source.image,
        },
        thumbnail: {
          url: source.thumbnailImage,
          format: 'thumbnail',
        },
      },
    };
  }

  private convertFeatures(source: any) {
    return [
      {
        name: 'Technical features',
        features: [
          {
            name: 'Feature',
            featureValues: source.features.map((feature: any) => {
              return { value: feature.feature };
            }),
          },
        ],
      },
      {
        name: 'Details',
        features: source.details.map((detail: any) => {
          return {
            name: detail.name,
            featureValues: detail.values.map((value: any) => {
              return {
                value,
              };
            }),
          };
        }),
      },
    ];
  }
}
