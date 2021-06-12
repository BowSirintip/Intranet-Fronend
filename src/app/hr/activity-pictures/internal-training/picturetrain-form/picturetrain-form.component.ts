import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';


@Component({
  selector: 'app-picturetrain-form',
  templateUrl: './picturetrain-form.component.html',
  styleUrls: ['./picturetrain-form.component.css']
})
export class PicturetrainFormComponent implements OnInit {

  items: GalleryItem[];

  constructor(private http: HttpClient, private route: ActivatedRoute, public dialog: MatDialog, public gallery: Gallery, public lightbox: Lightbox) { }
  idImg;
  val;
  id;
  img;


  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.idImg = params.get('id');
    });

    this.http.post<any>('api/Images/GetGallarySub', { topicType: this.idImg }).subscribe(value => {
      this.val = value;
    });


  }

  imageData;
  openImg(id) {
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
