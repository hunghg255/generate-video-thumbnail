/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { ElementRef, useRef, useState } from 'react';
import './App.css';
import { generateVideoThumbnails } from 'generate-video-thumbnail';

function App() {
  const [file, setFile] = useState<File>();
  const refInput = useRef<ElementRef<'input'>>(null);
  const refInputUrl = useRef<ElementRef<'input'>>(null);
  const [thumbs, setThumbs] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const onSelectFile = (e: any) => {
    if (!e.target.files || e.target.files.length === 0) {
      setFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setFile(e.target.files[0]);
  };

  const onGenAsync = async (thumbnail: string, index: number) => {
    setThumbs((prev) => {
      const newThumbnails = [...prev!];
      newThumbnails[index] = thumbnail;
      return newThumbnails;
    });
  };

  const onGenerate = async () => {
    const count = refInput.current?.value as string;
    const url = refInputUrl.current?.value as string;
    setIsLoading(true);

    if (!file && !url) return;

    setThumbs([]);

    if (url) {
      generateVideoThumbnails(url, +count, 'url', onGenAsync)
        .then((res: string[]) => {
          setThumbs(res);
        })
        .catch(() => {
          // setIsError(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
      return;
    }

    generateVideoThumbnails(file as any, +count, 'file', onGenAsync)
      .then((res: string[]) => {
        setThumbs(res);
      })
      .catch(() => {
        // setIsError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <h1>Generate Video Thumbnails</h1>
      <br />
      <br />

      <div>
        <input type='file' onChange={onSelectFile} accept='.mp4' />
      </div>
      <br />

      <div>
        URL: <input type='url' placeholder='URL mp4' ref={refInputUrl} />
      </div>
      <br />

      <div>
        Count thumbnails: <input type='number' ref={refInput} placeholder='Count thumbnails' />
      </div>
      <br />

      <div>
        <button onClick={onGenerate}>Generate</button>
      </div>
      <br />

      <div className='thumbs'>
        {thumbs.map((thumb, index) => {
          if (!thumb) {
            return <p key={index}>Loading...</p>;
          }

          return <img key={index} src={thumb} />;
        })}
      </div>
    </>
  );
}

export default App;
