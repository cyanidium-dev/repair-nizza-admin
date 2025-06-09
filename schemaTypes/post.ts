import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Проект',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Заголовок',
      type: 'localizedString',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Подзаголовок',
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
    defineField({
      name: 'category',
      title: 'Категория',
      type: 'reference',
      to: [{type: 'category'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'isLatestProject',
      title: 'Показывать как последний проект',
      type: 'boolean',
      description: 'Только один проект может быть отмечен как последний',
      initialValue: false,
    }),
    defineField({
      name: 'showOnHomepage',
      title: 'Показывать на главной',
      type: 'boolean',
      description: 'Проект будет отображаться на главной странице',
      initialValue: false,
    }),
    defineField({
      name: 'mainImage',
      title: 'Заглавное фото (компьютер)',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
      description: 'Оптимальный размер: 1280 x 450 пикселей',
    }),
    defineField({
      name: 'mobileMainImage',
      title: 'Заглавное фото (мобильное)',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
      description: 'Оптимальный размер: 360 x 660 пикселей',
    }),
    defineField({
      name: 'beforeAfterImages',
      title: 'Фото до и после',
      type: 'object',
      fields: [
        {
          name: 'before',
          title: 'Фото до',
          type: 'image',
          validation: (rule) => rule.required(),
          description: 'Квадратное фото (1:1)',
        },
        {
          name: 'after',
          title: 'Фото после',
          type: 'image',
          validation: (rule) => rule.required(),
          description: 'Квадратное фото (1:1)',
        },
      ],
    }),
    defineField({
      name: 'mainBlock',
      title: 'Основной блок',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Название',
          type: 'localizedString',
          validation: (rule) => rule.required(),
        },
        {
          name: 'description',
          title: 'Описание',
          type: 'localizedBlockContent',
          validation: (rule) => rule.required(),
        },
        {
          name: 'image',
          title: 'Фото',
          type: 'image',
          validation: (rule) => rule.required(),
        },
      ],
    }),
    defineField({
      name: 'clientTaskBlock',
      title: 'Задача клиента',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Заголовок',
          type: 'localizedString',
          validation: (rule) => rule.required(),
        },
        {
          name: 'description',
          title: 'Описание',
          type: 'localizedBlockContent',
          validation: (rule) => rule.required(),
        },
        {
          name: 'image',
          title: 'Фото',
          type: 'image',
          validation: (rule) => rule.required(),
        },
      ],
    }),
    defineField({
      name: 'solutionBlock',
      title: 'Решение и результат',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Заголовок',
          type: 'localizedString',
          validation: (rule) => rule.required(),
        },
        {
          name: 'description',
          title: 'Описание',
          type: 'localizedBlockContent',
          validation: (rule) => rule.required(),
        },
        {
          name: 'image',
          title: 'Фото',
          type: 'image',
          validation: (rule) => rule.required(),
        },
      ],
    }),
    defineField({
      name: 'gallery',
      title: 'Галерея фото',
      type: 'array',
      of: [{type: 'image'}],
      description: 'Оптимальный размер: 1200 x 620 пикселей',
    }),
    defineField({
      name: 'testimonial',
      title: 'Отзыв клиента',
      type: 'object',
      fields: [
        {
          name: 'clientPhoto',
          title: 'Фото клиента',
          type: 'image',
          validation: (rule) => rule.required(),
        },
        {
          name: 'clientName',
          title: 'Имя клиента',
          type: 'localizedString',
          validation: (rule) => rule.required(),
        },
        {
          name: 'text',
          title: 'Текст отзыва',
          type: 'localizedBlockContent',
          validation: (rule) => rule.required(),
        },
        {
          name: 'roomPhoto',
          title: 'Фото помещения',
          type: 'image',
          validation: (rule) => rule.required(),
          description: 'Оптимальный размер: 1200 x 318 пикселей',
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title.ru',
      media: 'mainImage',
    },
  },
})
