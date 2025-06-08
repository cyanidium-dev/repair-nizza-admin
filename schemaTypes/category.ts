import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Категория',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Название',
      type: 'localizedString',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title.en',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title.ru',
    },
  },
})
