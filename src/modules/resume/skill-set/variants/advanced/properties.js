import propertyTypes from 'msk-property-types'
import themes from 'msk-themes'

const properties = {
  theme: {
    name: 'Theme',
    type: propertyTypes.THEME,
    value: themes.dark.midnightBlue,
    required: true
  },
  headlineText: {
    name: 'Headline text',
    type: propertyTypes.STRING,
    value: 'Skill Set',
    required: true
  },
  skills: {
    name: 'Skills',
    type: propertyTypes.ARRAY,
    value: [
      {
        name: 'Skill',
        type: propertyTypes.OBJECT,
        value: {
            name: 'Skill 1',
            rating: 1.5
        },
        required: true
      },
      {
        name: 'Skill',
        type: propertyTypes.OBJECT,
        value: {
            name: 'Skill 2',
            rating: 4
        },
        required: true
      },
      {
        name: 'Skill',
        type: propertyTypes.OBJECT,
        value: {
            name: 'Skill 3',
            rating: 5
        },
        required: true
      },
    ],
    required: true
  }
};

export default properties;
