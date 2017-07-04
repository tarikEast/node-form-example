import Ember from 'ember';
import formBufferProperty from 'ember-validated-form-buffer';
import {validator, buildValidations} from 'ember-cp-validations';

const Validations = buildValidations({
  firstName: [
    validator('presence', true),
    validator('length', { min: 4 })
  ],
  lastName: validator('presence', true)
})

export default Ember.Controller.extend({
  data: formBufferProperty('model', Validations),

  actions: {
    submit() {
      this.get('data').validate().then(({ validations }) => {
        if (validations.get('isValid')) {
          this.get('data').applyBufferedChanges();
        }
      })
    }
  }
});
