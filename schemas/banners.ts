export default {
  name: 'banner',
  title: 'Banner',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
    },
    {
      name: 'product',
      title: 'Product',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'header',
      title: 'Header',
      type: 'string',
    },
    {
      name: 'discount',
      title: 'Discount(%)',
      type: 'number',
    },
    {
      name: 'saleStartDate',
      title: 'Sale Start Date',
      type: 'date',
    },
    {
      name: 'saleEndDate',
      title: 'Sale End Date',
      type: 'date',
    },
    {
      name: 'extraMessage',
      title: 'Extra Message',
      type: 'string',
    },
  ],
}
