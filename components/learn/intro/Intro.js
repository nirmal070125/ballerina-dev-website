/**
 * Copyright (c) 2022, WSO2 LLC (http://www.wso2.com) All Rights Reserved.
 *
 * WSO2 LLC licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import * as React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import styles from './Intro.module.css';
import { prefix } from '../../../utils/prefix';

export default function Intro() {

    return (
        <>
            <Container>

                <Row className='pageContentRow llanding'>
                    <Col xs={12} md={3} lg={3} className={styles.introCard}>
                        <a href={`${prefix}/learn/get-started`} className={`${styles.cardWrapper} ${styles.secondary}`}>
                            <div>
                                <h3>Get started with Ballerina</h3>
                                <div className={styles.cardDescription}>
                                    <p>Write your first Ballerina program and create your first Ballerina package</p>
                                </div>
                            </div>
                        </a>
                    </Col>

                    <Col xs={12} md={3} lg={3} className={styles.introCard}>
                        <a href={`${prefix}/learn/by-example`} className={`${styles.cardWrapper} ${styles.secondary}`}>
                            <div>
                                <h3>Ballerina by Example</h3>
                                <div className={styles.cardDescription}>
                                    <p>A series of guided examples to learn the language</p>
                                </div>
                            </div>
                        </a>
                    </Col>
                    <Col xs={12} md={3} lg={3} className={styles.introCard}>
                        <a href={`https://lib.ballerina.io/`} target='_blank' rel="noreferrer" className={`${styles.cardWrapper} ${styles.secondary}`}>
                            <div>
                                <h3>Ballerina API Docs</h3>
                                <div className={styles.cardDescription}>
                                    <p>Library API documentation</p>
                                </div>
                            </div>
                        </a>
                    </Col>

                    <Col xs={12} md={3} lg={3} className={styles.introCard}>
                        <a href={`${prefix}/learn/ballerina-specifications`} className={`${styles.cardWrapper} ${styles.secondary}`}>
                            <div>
                                <h3>Ballerina specifications</h3>
                                <div className={styles.cardDescription}>
                                    <p>Language, library, and platform specifications</p>
                                </div>
                            </div>
                        </a>
                    </Col>
                </Row>

            </Container>




        </>
    );
}
