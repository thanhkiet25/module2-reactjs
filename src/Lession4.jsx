import React from "react";
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button';

export default function Lession4() {
  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>STT</th>
            <th>Họ và tên</th>
            <th>Giới tính</th>
            <th>Ngày sinh</th>
            <th>Email</th>
            <th>Địa chỉ</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Nguyễn văn A</td>
            <td>Nam</td>
            <td>01/4/2001</td>
            <td>thanhkiet2332@gmail.com</td>
            <td>Tây ninh</td>
            <td>
            <Button variant="warning">Sửa</Button>
            <Button variant="danger">Xóa</Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Nguyễn văn A</td>
            <td>Nam</td>
            <td>01/4/2001</td>
            <td>thanhkiet2332@gmail.com</td>
            <td>Tây ninh</td>
            <td>
            <Button variant="warning">Sửa</Button>
            <Button variant="danger">Xóa</Button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Nguyễn văn A</td>
            <td>Nu</td>
            <td>01/4/2001</td>
            <td>thanhkiet2332@gmail.com</td>
            <td>Tây ninh</td>
            <td>
            <Button variant="warning">Sửa</Button>
            <Button variant="danger">Xóa</Button>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Nguyễn văn A</td>
            <td>Nam</td>
            <td>01/4/2001</td>
            <td>thanhkiet2332@gmail.com</td>
            <td>Tây ninh</td>
            <td>
            <Button variant="warning">Sửa</Button>
            <Button variant="danger">Xóa</Button>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>Nguyễn văn A</td>
            <td>Nam</td>
            <td>01/4/2001</td>
            <td>thanhkiet2332@gmail.com</td>
            <td>Tây ninh</td>
            <td>
            <Button variant="warning">Sửa</Button>
            <Button variant="danger">Xóa</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
