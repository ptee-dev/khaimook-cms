import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'mainBackground',
    title: 'Main Background',
    type: 'document',
    fields: [
        defineField({
            name: 'backgroundImages',
            title: 'Background Images',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }],
            validation: Rule => Rule.required().min(1)
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'string',
            description: 'คำบรรยายเกี่ยวกับภาพพื้นหลังที่เลือก'
        })
    ]
})
