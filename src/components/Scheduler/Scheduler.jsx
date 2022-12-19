import React, { Component } from 'react';
import { DateTime } from 'luxon';
import 'dhtmlx-scheduler';
import 'dhtmlx-scheduler/codebase/dhtmlxscheduler_material.css';
 
const scheduler = window.scheduler;
const toDay = (DateTime.now()).toFormat("y, L, d");
 
export default class Scheduler extends Component {
    componentDidMount() {
        scheduler.skin = 'material';
        scheduler.config.header = [
            'day',
            'week',
            'month',
            'date',
            'prev',
            'today',
            'next'
        ];
 
        const { events } = this.props;
        scheduler.init(this.schedulerContainer, toDay);
        scheduler.clearAll();
        scheduler.parse(events);
    }
 
    render() {
        return (
            <div ref={ (input) => { this.schedulerContainer = input } } style={ { width: '100%', height: '800px' } }></div>
       );
    }
}