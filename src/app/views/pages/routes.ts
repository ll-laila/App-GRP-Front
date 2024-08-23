import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '404',
    loadComponent: () => import('./page404/page404.component').then(m => m.Page404Component),
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    loadComponent: () => import('./page500/page500.component').then(m => m.Page500Component),
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then(m => m.LoginComponent),
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.component').then(m => m.RegisterComponent),
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'profil',
    loadComponent: () => import('./profil/profil.component').then(m => m.ProfilComponent),
    data: {
      title: 'Profil'
    }
  },
  {
    path: 'parametresCompte',
    loadComponent: () => import('./parametres-compte/parametres-compte.component').then(m => m.ParametresCompteComponent),
    data: {
      title: 'Paramètres du compte'
    }
  },
  {
    path: 'abonnements',
    loadComponent: () => import('./abonnements/abonnements.component').then(m => m.AbonnementsComponent),
    data: {
      title: 'Abonnements'
    }
  },
  {
    path: 'support',
    loadComponent: () => import('./support/support.component').then(m => m.SupportComponent),
    data: {
      title: 'Support'
    }
  },
  {
    path: 'detailsUser',
    loadComponent: () => import('./support/details-user/details-user.component').then(m => m.DetailsUserComponent),
    data: {
      title: 'Details User'
    }
  },
  {
    path: 'paiement',
    loadComponent: () => import('./paiement/paiement.component').then(m => m.PaiementComponent),
    data: {
      title: 'Paiement'
    }
  }
];
