import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');

  this.route('heroes', function() {
    this.route('new');
    this.route('edit', { path: '/:hero_id/edit' });
  });
});

export default Router;
