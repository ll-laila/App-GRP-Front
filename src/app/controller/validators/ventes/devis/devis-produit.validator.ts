import {ValidatorItem} from "@bshg/validation";
import {Validator} from "@bshg/validation";
import {DevisProduit} from "src/app/controller/entities/ventes/devis/devis-produit";
import {Produit} from 'src/app/controller/entities/produit/produit';
import {Devis} from 'src/app/controller/entities/ventes/devis/devis';

export class DevisProduitValidator extends Validator< DevisProduit> {
  total = new ValidatorItem<number>(
    () => this.item().total,
    (value) => this.item().total = value  || 0,
    (value) => {
      this.total.numberValidators
        ?.required()
        ?.valid()
    }
  )
  quantite = new ValidatorItem<number>(
    () => this.item().quantite,
    (value) => this.item().quantite = value  || 0,
    (value) => {
      this.quantite.numberValidators
        ?.required()
        ?.valid()
    }
  )
  disque = new ValidatorItem<number>(
    () => this.item().disque,
    (value) => this.item().disque = value  || 0,
    (value) => {
      this.disque.numberValidators
        ?.required()
        ?.valid()
    }
  )
  produit = new ValidatorItem<Produit>(
    () => this.item().produit,
    (value) => this.item().produit = value,
    (value) => {
      this.produit.validators
        ?.errorIf(value?.id == null, "No Produit Was Provided!")
        ?.valid()
    }
  )
  devis = new ValidatorItem<Devis>(
    () => this.item().devis,
    (value) => this.item().devis = value,
    (value) => {
      this.devis.validators
        ?.errorIf(value?.id == null, "No Devis Was Provided!")
        ?.valid()
    }
  )

  override validatorItems: ValidatorItem< any>[] = [
    this.total,
    this.quantite,
    this.disque,
    this.produit,
    this.devis,
  ]

  getValidatorItem(fieldName: string): ValidatorItem< any> {
    // @ts-ignore
    return this[fieldName];
  }

  static init(item: () => DevisProduit): DevisProduitValidator {
    const validator = new DevisProduitValidator()
    validator.item = item
    return validator;
  }

}
