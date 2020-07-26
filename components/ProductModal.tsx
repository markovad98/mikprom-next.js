import React from "react";

type TProps = {
  isVisible: boolean;
  handleHideModal: (event: any) => void;
  product: any;
};

const ProductModal: React.FC<TProps> = ({ isVisible, handleHideModal, product }) => {
  return (
    <div onClick={handleHideModal} className={`modal ${isVisible ? "modal_show" : ""}`}>
      <div className="modal-dialog">
        <div className="new-modal">
            <div className="new-modal-title">{product.title}</div>
            <div className="new-modal-container">
                <div className="new-modal-img">
                    <img src={product.img} alt=""/>
                </div>
                
                <div className="new-modal-info-container">
                    <div className="new-modal-info-item"><span>Термическое состояние: </span><br/>{product.termState}</div>
                    <div className="new-modal-info-item"><span>Состав:</span><br/>{product.composition}</div>
                    <div className="new-modal-info-item"><span>Пищевая ценность в 100 г продукта:</span><br/>{product.BJU?.split(";")?.
                    map((str: any) => `${str};\n`)?.filter((str: string) => str.length > 2).join(" ")
                    }</div>
                    <div className="new-modal-info-item"><span>Срок годности:</span><br/>{product.lifeLong}</div>
                    <div className="new-modal-info-item"><span>Упаковка:</span><br/>{product.Packaging}</div>
                    <div className="new-modal-info-item"><span>Вес НЕТТО: </span><br/>{product.Weight}</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
