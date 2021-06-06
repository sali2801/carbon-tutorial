import React from 'react';
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

const RepoPage = () => {
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
        <SimpleBarChart
          data={this.state.data}
          options={this.state.options}></SimpleBarChart>
      </div>
      {/* ROW 3 */}
      <div className="bx--row landing-page__r3">
        <DataTable rows={rowData} headers={headerData}>
          {({ rows, headers, getHeaderProps, getTableProps }) => (
            <TableContainer title="DataTable">
              <Table {...getTableProps()}>
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
        </DataTable>
      </div>
    </div>
  );
};

export default RepoPage;
