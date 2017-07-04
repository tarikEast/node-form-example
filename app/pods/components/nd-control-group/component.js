import Ember from 'ember';

export default Ember.Component.extend({
  type: "text",
  labelText: Ember.computed('propertyName', function(){
    return this.propertyName
      .replace(/([A-Z])/g, function(str) { return ` ${str.toLowerCase()}`; })
      .replace(/^./, function(str) { return str.toUpperCase(); })
  })
});
