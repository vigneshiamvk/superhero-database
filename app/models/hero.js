import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  alterego: DS.attr('string'),
  universe: DS.attr('string'),
  gender: DS.attr('string'),
  imageurl: DS.attr('string')
});
