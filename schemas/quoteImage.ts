import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'quoteImage',
    title: 'ภาพน้องไข่มุก',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'คำอธิบายภาพ',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'ภาพ',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
    ],
})
