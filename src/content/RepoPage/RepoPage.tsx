import React, { useEffect } from 'react'
import {
  Information20,
  Star20,
  Edit20,
  Share20,
  OverflowMenuVertical20,
} from '@carbon/icons-react';
import {
  Breadcrumb, 
  BreadcrumbItem,
  DataTable,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from 'carbon-components-react';
import { SimpleBarChart } from '@carbon/charts-react';
import { headerData, rowData } from './sampleData';
import { useDispatch, useSelector } from 'react-redux';
import ApiService from '../../api/ApiService';
import {selectMockData} from  '../../redux/selector'

const RepoPage = () => {

    
  const dispatch = useDispatch();

  const mockData = useSelector(selectMockData);


   useEffect(() => {
    ApiService.loadData(dispatch);
    }, [dispatch])



  
  const errorContainer = () => {
    return <div>ERROR IN API</div>;
  }


  const renderData = (mockData: []) => {
    return  mockData?.length || 0 ? errorContainer():
    <div className="container">
        <div className="header">
        <div>NAME</div>
        <div>EMAIL</div>
        <div>PHONE</div>
        <div>WEBSITE</div>    
      </div>
    {mockData.map((post: any, index:any) =>
        <div className="row" key={index}>
        <div> { post.userId } </div>
        <div>{ post.id }</div>
        <div>{ post.title } </div>
        <div>{ post.body } </div>    
        </div>
    )}
    </div>
  }

  return (
    <div className="bx--grid">
      {/* ROW 1 */}
      <div className="bx--row">
        <div className="bx--col-lg-16">
          <Breadcrumb aria-label="Page navigation">
            <BreadcrumbItem href="/">All Reports</BreadcrumbItem>
          </Breadcrumb>
          <h4>
            Report Name
            <span>
              <Information20 />
            </span>
          </h4>
        </div>
        <div className="bx--col-lg-16">
          <Star20 />
          <Edit20 />
          <Share20 />
          <OverflowMenuVertical20 />
        </div>
      </div>
      {/* ROW 2 */}
      <div className="bx--row landing-page__r2">
      {renderData(mockData)}
      </div>
      {/* ROW 3 */}
      <div className="bx--row landing-page__r3">
 </div>
    </div>
  );
};

export default RepoPage;
