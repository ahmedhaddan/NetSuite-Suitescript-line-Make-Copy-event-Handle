/**
 * @NApiVersion 2.x
 * @NScriptType ClientScript
 *
 * @fileoverview MakeCopyEventHandler is a client script that handles the make copy button click event
 *
 * @module MakeCopyEventHandler
 * @Author  Ahmed Haddan
 * @require record
 * @require currentRecord
 */
define(['N/record', 'N/currentRecord', 'N/log'], function(record, currentRecord, log) {

    /**
     * @function pageInit
     * @description Client script pageInit function
     *
     * @param {Object} context
     */
    function pageInit(context) {


        /**
         * @name makeCopyButton
         * @type {HTMLElement}
         * @description take the element with the id 'item_copy' and assign it to the variable makeCopyButton
         *
         */
        var makeCopyButton = document.getElementById('item_copy');
        if (makeCopyButton) {

            /**
             * @function onclick
             * @description Click handler for the makeCopyButton
             *
             */
            makeCopyButton.onclick = function() {
                try {
                    // Perform the line copy
                    item_machine.copyline();

                    setWindowChanged(window, true);

                    /**
                     * @name rec
                     * @type {Record}
                     * @description Get the current record
                     */
                    var rec = currentRecord.get();

                    // do any other logic here eg: in my case I want to clear a field on the new line

                    /**
                     * @name sublistId
                     * @type {string}
                     * @description The sublist id
                     */
                    var sublistId = 'item'; // change the sublist id to the correct sublist id in your record eg: 'expense'

                    /**
                     * @name currentLine
                     * @type {number}
                     * @description Get the current sublist index
                     */
                    var currentLine = rec.getCurrentSublistIndex({
                        sublistId: sublistId
                    });

                    /**
                     * @function setCurrentSublistValue
                     * @description Clear the 'custcol_pdf_group' field on the new line
                     */
                    rec.setCurrentSublistValue({
                        sublistId: sublistId,
                        fieldId: 'custcol_your_field_id_here', // change the field id to the correct field id in your record eg: 'custcol_pdf_group'
                        value: 'your_value_here' // change the value to the correct value in your record eg: '
                    });

                    console.log('line copied successfully') // should see this message in the console after clicking the make copy button

                    return false;
                } catch (e) {
                    console.error('Error in Make Copy Click Handler', e.message);
                    return false;
                }
            };
        }
    }

    return {
        pageInit: pageInit
    };
});

