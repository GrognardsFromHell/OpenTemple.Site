(function ($) {

    'use strict';

    /**
     * Process all time elements to show the timestamps in local time.
     */
    $(function () {
        $('time[datetime]').each(function () {
            const $self = $(this);
            try {
                const isoTimeStamp = $self.attr('datetime');
                const datetime = new Date(isoTimeStamp);
                $self.text(datetime.toLocaleString());
                $self.attr('title', isoTimeStamp);
            } catch (e) {
            }
        });
    });

}(jQuery));
