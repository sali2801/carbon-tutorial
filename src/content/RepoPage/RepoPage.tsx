import React, { useEffect, useState } from 'react';
import {
  Information20,
  Star20,
  Edit20,
  Share20,
  OverflowMenuVertical20,
  Settings20,
  Search20,
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
  TableToolbar,
  TableToolbarSearch,
  TableBatchActions,
  TableToolbarMenu,
  TableToolbarContent,
  TableToolbarAction,
} from 'carbon-components-react';
import { SimpleBarChart } from '@carbon/charts-react';
import { BarChartOptions, ScaleTypes } from '@carbon/charts/interfaces';
import { useDispatch, useSelector } from 'react-redux';
import ApiService from '../../api/ApiService';
import { selectMockData } from '../../redux/selector';
import { ApplicationActionType } from '../../redux/types';

const RepoPage = () => {
  const dispatch = useDispatch(); // only way to change state in redux

  const mockData = useSelector(selectMockData);

  /* const [options, setOptions] = useState<BarChartOptions>({
    axes:  {
      left: {
        mapsTo: "group",
        scaleType: ScaleTypes.LABELS
      },
      bottom: {
        mapsTo: "value"
      }
    },
    height: "400px",
  });
 */

  // We would have a headers array like the following
  const headers = [
    {
      key: 'month',
      header: 'Month',
    },
    {
      key: 'quantity',
      header: 'Quantity',
    },
    {
      // `key` is the name of the field on the row object itself for the header
      key: 'notes',
      // `header` will be the name you want rendered in the Table Header
      header: 'Notes',
    },
  ];


  const options = {
    axes: {
      left: {
        mapsTo: 'quantity',
        title: 'Quantity'
      },
      bottom: {
        mapsTo: 'group',
        scaleType: ScaleTypes.LABELS,
        title: 'Months'
      },
    },
    legend:{
      enabled:false
    },
    height: '400px'
  };

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/sali2801/mockDataServer/sales')
      .then((response) => response.json())
      .then((posts) => {
        dispatch({ type: ApplicationActionType.SetMockData, payload: posts });
      });
    //ApiService.loadData(dispatch);
  }, []); // the extra [] make this run ONCE after initial rendering

  const handleClick = (e: any) => {};

  return (
    <div className="bx--grid">
      {/* ROW 1 */}
      <div className="bx--row">
        <section className="bx--offset-md-2 landing-page__header">
          <div className="bx--col">
          <Breadcrumb aria-label="Page navigation">
            <BreadcrumbItem href="/">All Reports</BreadcrumbItem>
          </Breadcrumb>
          <h4>
            Report Name
            <span>
              <Information20 />
            </span>
          </h4>
          <div>
          <Star20 />
          <Edit20 />
          <Share20 />
          <OverflowMenuVertical20 />
        </div>
        </div>
         
        </section>
      </div>
      {/* ROW 2 */}
      <div className="bx--row">
      <section className="bx--offset-md-2 landing-page__r2">
        <SimpleBarChart data={mockData} options={options}></SimpleBarChart>
      </section>
      </div>

      {/* ROW 3 */}

      <div className="bx--row">
      <section className="bx--offset-md-2 landing-page__r3">
        <DataTable
          rows={mockData}
          headers={headers}
          isSortable
          render={({ rows, headers, getHeaderProps }) => (
            <TableContainer
              title="2021 sales"
              description="sales/month">
              <TableToolbar>
                <TableToolbarContent>
                  <TableToolbarAction onClick={handleClick}>
                    <Search20 />
                  </TableToolbarAction>
                  <TableToolbarAction onClick={handleClick}>
                    <Edit20 />
                  </TableToolbarAction>
                  <TableToolbarAction onClick={handleClick}>
                    <Settings20 />
                  </TableToolbarAction>
                </TableToolbarContent>
              </TableToolbar>
              <Table>
                <TableHead>
                  <TableRow>
                    {headers.map((header) => (
                      <TableHeader {...getHeaderProps({ header })}>
                        {header.header}
                      </TableHeader>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.id}>
                      {row.cells.map((cell) => (
                        <TableCell key={cell.id}>{cell.value}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        />
        </section>

      </div>

    </div>
  );
};

export default RepoPage;
