import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot } from '@fortawesome/free-regular-svg-icons';
import { faArrowRight, faArrowLeft, faLocationDot, faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

const DATA_ROOM = {
    address_overview: '212 - 250B TÂN KỲ TÂN QUÝ',
    create_info: {
        creator: 'bùi thị diễm my',
        phonenumber: '0123456789',
        datetime: '01/01/2025 00:00:00',
    },
    details: {
        address: '67 Thân Nhân Trung, Phường 13, Quận Tân Bình, Thành phố Hồ Chí Minh',
        price: '5,300,000',
        deposit: '5,300,000',
        contact_term: 'ký 12 tháng',
        electricity: '3,500/kWh',
        water: '100,000/ng',
        vehicle: '0/xe',
        management_fee: '150,000/ph',
        wifi: 'Miễn Phí',
        wash: '0/ng',
        magnetic_card: '0/ng',
        service_fee: '0',
        location_link: 'https://youtube.com',
    },
    interior: {
        rooms: '1 Phòng ngủ',
        Toilet: 'Riêng',
        gate_lock: 'Vân tay',
        max_vehilce: 'free 3',
        placement_stake: '2,000,000',
        floor: 'Lầu 5',
        parking: 'Chung',
        schedule: 'Tự do',
        max_people: '3',
        appointment_stake: '3',
        area: '25m2',
        drying_yard: 'Chung',
        appointment_move_into: '5',
        attic: true,
        fridge: false,
        kitchen_shelf: true,
        bed: false,
        shared_owner: false,
        air_conditioner: false,
        window: true,
        tv: false,
        dishwasher: true,
        mattress: false,
        elevator: false,
        skylight: false,
        balcony: false,
        washing_machine: 'Chung',
        water_heater: false,
        wardrobe: false,
        security: false,
        pet: 'Có (kèm điều kiện)',
        others_interior: 'Thêm máy lạnh 400k, tủ lạnh 300k, tủ quần áo 200k',
        electric_bike: null,
    },
    notice: 'free 2 xe',
    state: 'Trống',
};

function RoomItem() {
    const [openAddOverview, setOpenAddOverview] = useState(true);
    const [openAddress, setOpenAddress] = useState(true);
    const [openInterior, setOpenInterior] = useState(true);

    return (
        // wrapper
        // <div className="h-dvh w-dvw flex flex-col justify-center items-center">
        <div className="py-8 mobile:w-full md:w-3/4 h-full">
            <div className="mb-3 flex flex-row gap-1">
                <img
                    src="data:image/jpeg;base64,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"
                    alt="No Image"
                    className="w-1/3"
                />
                <div className="flex-1">
                    <div className="w-full h-fit flex flex-col justify-start items-center">
                        <h1 className="font-bold text-lg text-blue-700">
                            {openAddOverview ? DATA_ROOM.address_overview : '********'}
                        </h1>
                        <button className="text-sm text-red-500" onClick={() => setOpenAddOverview((prev) => !prev)}>
                            [Ẩn/Hiện]
                        </button>
                    </div>
                    <div className="w-full h-fit flex flex-col justify-start items-start">
                        <i className="text-xs opacity-50">{DATA_ROOM.create_info.datetime}</i>
                        <i className="text-xs opacity-50 uppercase">
                            <FontAwesomeIcon
                                icon={faCircleDot}
                                className="pr-1 text-red-500 opacity-100"
                            ></FontAwesomeIcon>

                            {openAddress && (
                                <>
                                    {DATA_ROOM.create_info.phonenumber.slice(0, 2) +
                                        '...' +
                                        DATA_ROOM.create_info.phonenumber.slice(-2)}
                                    -{DATA_ROOM.create_info.creator}-{DATA_ROOM.create_info.datetime}
                                </>
                            )}
                            <button className="pl-1 text-red-500" onClick={() => setOpenAddress((prev) => !prev)}>
                                [Ẩn/Hiện]
                            </button>
                        </i>
                        <div className="text-xs text-red-500">
                            <FontAwesomeIcon icon={faArrowRight} className="pr-1" />
                            <span className="font-thin">
                                Giá cho thuê: <span className="font-bold">{DATA_ROOM.details.price}</span>
                            </span>
                            <span className="font-thin">
                                -Cọc: <span className="font-bold">{DATA_ROOM.details.deposit}</span>
                            </span>
                            <br />
                            <FontAwesomeIcon icon={faArrowRight} />
                            <span className="px-1 font-bold">Thời hạn HĐ: {DATA_ROOM.details.contact_term}</span>
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </div>
                    </div>
                    <hr className="my-2" />
                    <div className="grid grid-cols-2 grid-rows-4 gap-2 text-xs">
                        <span>
                            Điện: <span className="font-bold">{DATA_ROOM.details.electricity}</span>
                        </span>
                        <span>
                            Wifi: <span className="font-bold">{DATA_ROOM.details.wifi}</span>
                        </span>
                        <span>
                            Nước: <span className="font-bold">{DATA_ROOM.details.water}</span>
                        </span>
                        <span>
                            M.giặt: <span className="font-bold">{DATA_ROOM.details.wash}</span>
                        </span>
                        <span>
                            Xe: <span className="font-bold">{DATA_ROOM.details.vehicle}</span>
                        </span>
                        <span>
                            Thẻ: <span className="font-bold">{DATA_ROOM.details.magnetic_card}</span>
                        </span>
                        <span>
                            Quản lý: <span className="font-bold">{DATA_ROOM.details.management_fee}</span>
                        </span>
                        <span>
                            Phí DV: <span className="font-bold">{DATA_ROOM.details.service_fee}</span>
                        </span>
                    </div>
                </div>
            </div>
            <a href={DATA_ROOM.details.location_link} className="ml-1 text-sm text-green-600 font-semibold">
                <FontAwesomeIcon icon={faLocationDot} className="pr-1" />
                Link GoogleMap
            </a>
            <button className="ml-2 text-sm text-red-500" onClick={() => setOpenInterior((prev) => !prev)}>
                [Ẩn/Hiện nội thất]
            </button>
            <hr className="my-2" />
            {openInterior && (
                <div className="flex flex-col gap-1">
                    <div className="grid grid-cols-3 grid-rows-5 grid-flow-col gap-1 text-xs">
                        <span>
                            Phòng: <span className="font-bold">{DATA_ROOM.interior.rooms}</span>
                        </span>
                        <span>
                            Toilet: <span className="font-bold">{DATA_ROOM.interior.Toilet}</span>
                        </span>
                        <span>
                            Khóa cổng: <span className="font-bold">{DATA_ROOM.interior.gate_lock}</span>
                        </span>
                        <span>
                            SL xe: <span className="font-bold">{DATA_ROOM.interior.max_vehilce}</span>
                        </span>
                        <span>
                            Cọc giữ chỗ: <span className="font-bold">{DATA_ROOM.interior.appointment_stake}</span>
                        </span>
                        <span>
                            Vị trí: <span className="font-bold">{DATA_ROOM.interior.floor}</span>
                        </span>
                        <span>
                            Để xe: <span className="font-bold">{DATA_ROOM.interior.parking}</span>
                        </span>
                        <span>
                            Giờ giấc: <span className="font-bold">{DATA_ROOM.interior.schedule}</span>
                        </span>
                        <span>
                            SL người: <span className="font-bold">{DATA_ROOM.interior.max_people}</span>
                        </span>
                        <span>
                            Hẹn cọc bổ sung:{' '}
                            <span className="font-bold">{DATA_ROOM.interior.appointment_move_into}</span>
                        </span>
                        <span>
                            Diện tích: <span className="font-bold">{DATA_ROOM.interior.area}</span>
                        </span>
                        <span>
                            Sân phơi: <span className="font-bold">{DATA_ROOM.interior.drying_yard}</span>
                        </span>
                        <span>
                            Hẹn dọn vào: <span className="font-bold">{DATA_ROOM.interior.appointment_move_into}</span>
                        </span>
                    </div>
                    <hr className="my-2" />
                    <div className="grid grid-cols-3 grid-rows-6 grid-flow-col text-xs">
                        <span>
                            Gác:{' '}
                            {DATA_ROOM.interior.attic ? (
                                <FontAwesomeIcon icon={faCheck} size="xl" className="text-blue-500" />
                            ) : (
                                <FontAwesomeIcon icon={faXmark} size="xl" className="text-red-500" />
                            )}
                        </span>
                        <span>
                            Tủ lạnh:{' '}
                            {DATA_ROOM.interior.fridge ? (
                                <FontAwesomeIcon icon={faCheck} size="xl" className="text-blue-500" />
                            ) : (
                                <FontAwesomeIcon icon={faXmark} size="xl" className="text-red-500" />
                            )}
                        </span>
                        <span>
                            Kệ bếp:{' '}
                            {DATA_ROOM.interior.kitchen_shelf ? (
                                <FontAwesomeIcon icon={faCheck} size="xl" className="text-blue-500" />
                            ) : (
                                <FontAwesomeIcon icon={faXmark} size="xl" className="text-red-500" />
                            )}
                        </span>
                        <span>
                            Giường:{' '}
                            {DATA_ROOM.interior.bed ? (
                                <FontAwesomeIcon icon={faCheck} size="xl" className="text-blue-500" />
                            ) : (
                                <FontAwesomeIcon icon={faXmark} size="xl" className="text-red-500" />
                            )}
                        </span>
                        <span>
                            Chung chủ:{' '}
                            {DATA_ROOM.interior.shared_owner ? (
                                <FontAwesomeIcon icon={faCheck} size="xl" className="text-blue-500" />
                            ) : (
                                <FontAwesomeIcon icon={faXmark} size="xl" className="text-red-500" />
                            )}
                        </span>
                        <span>
                            Máy lạnh:{' '}
                            {DATA_ROOM.interior.air_conditioner ? (
                                <FontAwesomeIcon icon={faCheck} size="xl" className="text-blue-500" />
                            ) : (
                                <FontAwesomeIcon icon={faXmark} size="xl" className="text-red-500" />
                            )}
                        </span>
                        <span>
                            Cửa sổ:{' '}
                            {DATA_ROOM.interior.window ? (
                                <FontAwesomeIcon icon={faCheck} size="xl" className="text-blue-500" />
                            ) : (
                                <FontAwesomeIcon icon={faXmark} size="xl" className="text-red-500" />
                            )}
                        </span>
                        <span>
                            TiVi:{' '}
                            {DATA_ROOM.interior.tv ? (
                                <FontAwesomeIcon icon={faCheck} size="xl" className="text-blue-500" />
                            ) : (
                                <FontAwesomeIcon icon={faXmark} size="xl" className="text-red-500" />
                            )}
                        </span>
                        <span>
                            Bồn rửa chén:{' '}
                            {DATA_ROOM.interior.dishwasher ? (
                                <FontAwesomeIcon icon={faCheck} size="xl" className="text-blue-500" />
                            ) : (
                                <FontAwesomeIcon icon={faXmark} size="xl" className="text-red-500" />
                            )}
                        </span>
                        <span>
                            Nệm:{' '}
                            {DATA_ROOM.interior.mattress ? (
                                <FontAwesomeIcon icon={faCheck} size="xl" className="text-blue-500" />
                            ) : (
                                <FontAwesomeIcon icon={faXmark} size="xl" className="text-red-500" />
                            )}
                        </span>
                        <span>
                            Thang máy:{' '}
                            {DATA_ROOM.interior.elevator ? (
                                <FontAwesomeIcon icon={faCheck} size="xl" className="text-blue-500" />
                            ) : (
                                <FontAwesomeIcon icon={faXmark} size="xl" className="text-red-500" />
                            )}
                        </span>
                        <span>
                            Giếng trời:{' '}
                            {DATA_ROOM.interior.skylight ? (
                                <FontAwesomeIcon icon={faCheck} size="xl" className="text-blue-500" />
                            ) : (
                                <FontAwesomeIcon icon={faXmark} size="xl" className="text-red-500" />
                            )}
                        </span>
                        <span>
                            Ban công:{' '}
                            {DATA_ROOM.interior.balcony ? (
                                <FontAwesomeIcon icon={faCheck} size="xl" className="text-blue-500" />
                            ) : (
                                <FontAwesomeIcon icon={faXmark} size="xl" className="text-red-500" />
                            )}
                        </span>
                        <span>
                            Máy giặt: <span className="font-bold">{DATA_ROOM.interior.washing_machine}</span>
                        </span>
                        <span>
                            Nước nóng:{' '}
                            {DATA_ROOM.interior.water_heater ? (
                                <FontAwesomeIcon icon={faCheck} size="xl" className="text-blue-500" />
                            ) : (
                                <FontAwesomeIcon icon={faXmark} size="xl" className="text-red-500" />
                            )}
                        </span>
                        <span>
                            Tủ quần áo:{' '}
                            {DATA_ROOM.interior.wardrobe ? (
                                <FontAwesomeIcon icon={faCheck} size="xl" className="text-blue-500" />
                            ) : (
                                <FontAwesomeIcon icon={faXmark} size="xl" className="text-red-500" />
                            )}
                        </span>
                        <span>
                            Bảo vệ:{' '}
                            {DATA_ROOM.interior.security ? (
                                <FontAwesomeIcon icon={faCheck} size="xl" className="text-blue-500" />
                            ) : (
                                <FontAwesomeIcon icon={faXmark} size="xl" className="text-red-500" />
                            )}
                        </span>
                    </div>
                    <span className="text-xs">
                        Nuôi thú cưng: <span className="font-bold">{DATA_ROOM.interior.pet}</span>
                    </span>
                    <span className="text-xs">
                        Nội thất khác: <span className="font-bold">{DATA_ROOM.interior.others_interior}</span>
                    </span>
                    <u className="text-xs text-red-500">
                        Nhận xe điện:{' '}
                        <span className="font-bold">{DATA_ROOM.interior.electric_bike || 'Chưa xác định'}</span>
                    </u>
                    <span className="text-xs">
                        Ghi chú: <span className="font-bold">{DATA_ROOM.notice}</span>
                    </span>
                    <span className="text-xs">
                        Trạng thái: <span className="font-bold">{DATA_ROOM.state}</span>
                    </span>
                </div>
            )}
        </div>
        // </div>
    );
}

export default RoomItem;
