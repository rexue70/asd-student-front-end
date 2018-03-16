import React, {Component} from 'react';
import styled from 'styled-components';
import Filter from "./Filter";
import SearchResult from "./SearchResult";
import { Grid, Row, Col, css } from 'react-bootstrap';
import ReactGridLayout from 'react-grid-layout';

class Search {

    render() {
        const layout = [
            {i: 'filter', x: 0, y: 0, w: 4, h: 30, static: true},
            {i: 'searchResult', x: 1, y: 0, w: 8, h: 30, static: true}
        ];
        return (
            <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
                <div key="filter"><Filter/></div>
                <div key="searchResult"><SearchResult/></div>
            </ReactGridLayout>
        )
    }
}

export default Search