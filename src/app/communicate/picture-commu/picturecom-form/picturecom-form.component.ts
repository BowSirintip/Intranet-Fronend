import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';

@Component({
  selector: 'app-picturecom-form',
  templateUrl: './picturecom-form.component.html',
  styleUrls: ['./picturecom-form.component.css']
})
export class PicturecomFormComponent implements OnInit {

  items: GalleryItem[];
  
  constructor(private http: HttpClient,private route: ActivatedRoute, public dialog: MatDialog, public gallery: Gallery, public lightbox: Lightbox) { }
  idImg;
  val;
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.idImg = params.get('id');
    });

    this.http.post<any>('api/Images/GetGallarySub', {topicType: this.idImg}).subscribe(value => {
     this.val = value; 
    });
  }

  imageData;
  openImgCom(id) {
    const data = [];
    this.http.post<any>('api/Images/GetGallarySubAll', { mainID: id }).subscribe(value => {
      for (let j = 0; j < value.length; j++) {
        data.push({ srcUrl: value[j].imgSub_Path, previewUrl: value[j].imgSub_Path },);
        this.imageData = data;
      }

      this.items = this.imageData.map(item => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl }));

      const lightboxRef = this.gallery.ref('lightbox');

      lightboxRef.setConfig({
        imageSize: ImageSize.Contain,
        thumbPosition: ThumbnailsPosition.Bottom
      });

      lightboxRef.load(this.items);
    });
  }

}
