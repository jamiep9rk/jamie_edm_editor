import react, { lazy, Suspense, useEffect, useState } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { DragDropContext } from "react-beautiful-dnd";
// import SkeletonSidebar from '@components/edmCanvas/SkeletonSidebar';
import { Modal, message } from "antd";

export default function EdmPage() {
  return (
    <Suspense fallback={<p>loading...</p>}>
      <Container>
        {/* <div className="edm-canvas">
      <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns, lastNum, setLastNum)}
      >
          <div className="sidebar">
              <div className="addOrEdit">
                  <div
                      className="button ds-flex fd-c jc-c ai-c"
                      style={state.addOrEdit === 'add' ? { backgroundColor: '#eaeaea' } : {}}
                      onClick={() => onChangeAddOrEdit('add')}
                      css={css`
                          svg {
                              fill: #383;
                          }
                      `}
                  >
                      <Icons
                          icon={state.addOrEdit === 'add' ? 'sidebar_add_black' : 'sidebar_add_gray'}
                      />
                      <p
                          className="fs-15 fw-400 lh-19"
                          style={state.addOrEdit === 'add' ? { color: '#383838' } : { color: '#919191' }}
                      >
                          추가
                      </p>
                  </div>
                  <div
                      className="button ds-flex fd-c jc-c ai-c"
                      style={state.addOrEdit === 'edit' ? { backgroundColor: '#eaeaea' } : {}}
                      onClick={() => onChangeAddOrEdit('edit')}
                  >
                      <Icons
                          icon={state.addOrEdit === 'edit' ? 'sidebar_edit_black' : 'sidebar_edit_gray'}
                      />
                      <p
                          className="fs-15 fw-400 lh-19"
                          style={state.addOrEdit === 'edit' ? { color: '#383838' } : { color: '#919191' }}
                      >
                          편집
                      </p>
                  </div>
              </div>
              <div className="sidebar-toolbar">
                  {state.addOrEdit !== 'edit' ? (
                      <div className="sidebar-area" style={{ padding: '12px 16px' }}>
                          <p className="fs-13 fw-500 lh-17 gray6">
                              추가할 템플릿을 화면에 드래그해주세요.
                          </p>
                      </div>
                  ) : null}
                  <div className="template-list">
                      {state.addOrEdit !== 'edit' ? (
                          <TempListColumn columnId="사이드바" column={sidebarColumns} />
                      ) : (
                          <Suspense fallback={<SkeletonSidebar />}>
                              <ContentSetting
                                  columns={columns}
                                  setColumns={setColumns}
                                  selectedTemplateId={selectedTemplateId}
                                  setSelectedTemplateId={setSelectedTemplateId}
                                  typeChange={typeChange}
                                  imgSet={imgSet}
                                  setImgSet={setImgSet}
                                  imgInput={imgInput}
                                  setImgInput={setImgInput}
                                  qrSet={qrSet}
                                  btnSet={btnSet}
                              />
                          </Suspense>
                      )}
                  </div>
              </div>
          </div>
          <div className="canvas-page" ref={onClickRef}>
              <div className="white-board">
                  <CanvasColumn
                      columnId="캔버스"
                      columns={columns}
                      setColumns={setColumns}
                      deleteTemplate={deleteTemplate}
                      copyTemplate={copyTemplate}
                      selectedTemplateId={selectedTemplateId}
                      setSelectedTemplateId={setSelectedTemplateId}
                      youtubeAddressModal={youtubeAddressModal}
                      setYoutubeAddressModal={setYoutubeAddressModal}
                      youtubeInput={youtubeInput}
                      setYoutubeInput={setYoutubeInput}
                      submitYoutube={submitYoutube}
                      mapAddressList={mapAddressList}
                      setMapAddressList={setMapAddressList}
                      onChangeAddOrEdit={onChangeAddOrEdit}
                      youtubeError={state.youtubeError}
                  />
              </div>
          </div>
      </DragDropContext>
  </div>
  <CustomModal
      // modalRef={modalRef}
      isVisible={state.cancel}
      setIsVisible={cancelEdm}
      onClickOk={() => navigate(`/${eventId}/recruit/edm`)}
      okText="취소하기"
      css={cancelEdmModal}
  >
      <CancelEdmModal />
  </CustomModal>
  <Modal open={state.send} className="sendEdmModal" bodyStyle={{ backgroundColor: '#fff', opacity: 1 }}>
      <SendEdmModal
          state={state}
          setState={setState}
          submitHtml={submitHtml}
          fix={edmId ? true : false}
          edmId={edmId}
          convertCanvas={convertCanvas}
          csvState={csvState}
          setCsvState={setCsvState}
          submitValue={submitValue}
          setSubmitValue={setSubmitValue}
          currentEdm={currentEdm}
      />
  </Modal>
  <Modal open={state.save} className="saveEdmModal" bodyStyle={{ backgroundColor: '#fff', opacity: 1 }}>
      <SaveEdmModal
          state={state}
          setState={setState}
          submitHtml={submitHtml}
          fix={edmId ? true : false}
          edmId={edmId}
          onChangeTitle={onChangeTitle}
          convertCanvas={convertCanvas}
      />
  </Modal> */}
      </Container>
    </Suspense>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  z-index: 1;
  .edm-canvas {
    height: 1016px;
    display: flex;
  }
  .sidebar {
    width: 320px;
    height: 100%;
    display: flex;
    background-color: #fff;
    .addOrEdit {
      width: 64px;
      border-right: 1px solid #eaeaea;
      .button {
        height: 72px;
        background-color: #fff;
        cursor: pointer;
      }
    }
    .template-list {
      width: 256px;
      border-top: 1px solid #eaeaea;
    }
  }
  .sidebar-toolbar {
    overflow-y: scroll;
  }
  .canvas-page {
    width: 1600px;
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    display: flex;
    justify-content: center;
    background-color: #f7fafd;
    .white-board {
      width: 640px;
      min-height: 1016px;
      height: fit-content;
      background-color: #fff;
    }
  }
  .tox-editor-header {
    max-width: 620px !important;
  }
  a:link {
    color: none;
    background-color: transparent;
    text-decoration: none;
  }

  a:visited {
    color: none;
    background-color: transparent;
    text-decoration: none;
  }

  a:hover {
    color: none;
    background-color: transparent;
    text-decoration: underline;
  }
`;
