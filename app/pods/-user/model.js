import DS from 'ember-data';
import {validator, buildValidations} from 'ember-cp-validations';

const Validations = buildValidations({
  firstName: validator('presence', true),
  lastName: validator('presence', true)
})

export default DS.Model.extend(Validations, {
  firstName: DS.attr('string'),
  lastName: DS.attr('string')
});
