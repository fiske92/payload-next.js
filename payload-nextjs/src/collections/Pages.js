import { Hero } from "../blocks/Hero";
import { TwoColumn } from "../blocks/TwoColumn";

export const Pages = {
    slug: 'pages',
    labels: {
        singular: 'Page',
        plural: 'Pages'
    },
    access: {
        read: () => true
    },
    fields: [
        {
            name: 'title',
            label: 'Title',
            type: 'text',
            required: true
        }, 
        {
            name: 'slug',
            label: 'Slug',
            type: 'text',
            required: true
        },
        {
            name: 'content',
            label: 'Content',
            type: 'blocks',
            blocks: [
                Hero,
                TwoColumn
            ]
        }
    ]
}