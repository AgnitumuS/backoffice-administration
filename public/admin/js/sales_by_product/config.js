export default function (nga, admin) {
    var salesreport = admin.getEntity('sales_by_product');
    salesreport.listView()
        .title('<h4>Sales by product <i class="fa fa-angle-right" aria-hidden="true"></i> List</h4>')
        .fields([
            nga.field('combo_id', 'reference')
                .targetEntity(admin.getEntity('Combos'))
                .targetField(nga.field('name'))
                .label('Product'),
            nga.field('count', 'number')
                .cssClasses('hidden-xs')
                .label('Sale no.'),
            nga.field('saledate', 'date')
                .cssClasses('hidden-xs')
                .label('Last sold on'),
            nga.field('combo_id', 'reference')
                .targetEntity(admin.getEntity('Combos'))
                .targetField(nga.field('duration'))
                .label('Duration (days)'),
            nga.field('combo_id', 'reference')
                .targetEntity(admin.getEntity('Combos'))
                .targetField(nga.field('value'))
                .label('Value')
        ])
        .filters([
            nga.field('startsaledate', 'date')
                .attributes({ placeholder: 'Sale date from' })
                .label('Start sale date'),
            nga.field('endsaledate', 'date')
                .attributes({placeholder: 'Sale date to' })
                .label('End sale date'),
        ])
        .exportFields([
            salesreport.listView().fields(),
        ]);

    return salesreport;

}
