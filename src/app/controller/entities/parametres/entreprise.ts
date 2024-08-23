import { Adresse } from 'src/app/controller/entities/adresse/adresse';
import { Employe } from 'src/app/controller/entities/contacts/user/employe';
import { Produit } from 'src/app/controller/entities/produit/produit';
import { Client } from 'src/app/controller/entities/contacts/client';
import { Fournisseur } from 'src/app/controller/entities/contacts/fournisseur';
import { Paiement } from 'src/app/controller/entities/ventes/paiement';
import { CommandeExpedition } from 'src/app/controller/entities/ventes/commande-expedition';
import { Livraison } from 'src/app/controller/entities/inventaire/livraison/livraison';
import { BonCommande } from 'src/app/controller/entities/inventaire/boncommande/bon-commande';
import { NiveauStock } from 'src/app/controller/entities/inventaire/niveau-stock';
import { Remboursement } from 'src/app/controller/entities/ventes/remboursement/remboursement';
import { NoteCredit } from 'src/app/controller/entities/ventes/notecredit/note-credit';
import { RetourProduit } from 'src/app/controller/entities/ventes/retourproduit/retour-produit';
import { Facture } from 'src/app/controller/entities/ventes/facture/facture';
import { Commande } from 'src/app/controller/entities/ventes/commande/commande';
import { Estimation } from 'src/app/controller/entities/ventes/estimation/estimation';
import { Devises } from 'src/app/controller/entities/parametres/devises';
import { NouvelleDevise } from 'src/app/controller/entities/parametres/nouvelle-devise';
import { Devis } from 'src/app/controller/entities/ventes/devis/devis';
import { EntrepriseDevises } from 'src/app/controller/entities/parametres/entreprise-devises';
import {AppUser} from "../../auth/entities/app-user";
export class Entreprise {
id!: number;
nom?: string ;
email?: string ;
telephone?: string ;
siteweb?: string ;
logo?: string ;
adresse?: Adresse ;
employes?: Array<Employe> ;
produits?: Array<Produit> ;
clients?: Array<Client> ;
fournisseurs?: Array<Fournisseur> ;
paiement?: Array<Paiement> ;
commandeExpedition?: Array<CommandeExpedition> ;
livraison?: Array<Livraison> ;
bonCommande?: Array<BonCommande> ;
niveauStock?: Array<NiveauStock> ;
remboursement?: Array<Remboursement> ;
noteCredit?: Array<NoteCredit> ;
retourProduit?: Array<RetourProduit> ;
facture?: Array<Facture> ;
commande?: Array<Commande> ;
estimation?: Array<Estimation> ;
devisesList?: Array<Devises> ;
nouvelleDevises?: Array<NouvelleDevise> ;
devisList?: Array<Devis> ;
entrepriseDevises?: Array<EntrepriseDevises> ;
idAdmin?: number;
}
