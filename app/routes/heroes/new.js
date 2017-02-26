import Ember from 'ember';

export default Ember.Route.extend({

  model()
  {
    return this.store.createRecord('hero');
  },

  actions:

    {
      saveHero(newHero){
        newHero.save().then(() => this.transitionTo('heroes'));
      },

      willTransition()
      {
        this.controller.get('model').rollbackAttributes();
      }
    }

});
