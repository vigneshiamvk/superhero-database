import Ember from 'ember';

export default Ember.Route.extend({

  model()
  {
    return this.store.findAll('hero');
  },

  actions:
  {
    deleteHero(hero) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        hero.destroyRecord();
      }
    }
  }
});
