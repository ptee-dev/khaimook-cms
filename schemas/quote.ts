import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'quote',
  title: 'คำพูดจากน้องไข่มุก',
  type: 'document',
  fields: [
    defineField({
      name: 'text',
      title: 'คำพูด',
      type: 'string',
      validation: Rule => Rule.required().min(5)
    })
  ]
})
