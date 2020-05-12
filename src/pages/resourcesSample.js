import React from 'react';
import TeacherResource from '../components/teacherResource';
import Layout from '../components/layout';

function ResourceSample(){
    return (
        <Layout sideBar={true} >
            <TeacherResource />
        </Layout>
    );
}

export default ResourceSample;
